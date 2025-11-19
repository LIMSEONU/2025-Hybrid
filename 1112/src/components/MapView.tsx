import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Restaurant } from "./RestaurantCard";

// Kakao Maps 타입 선언
declare global {
  interface Window {
    kakao: any;
    kakaoMapsReady?: boolean;
  }
}

interface MapViewProps {
  restaurants: Restaurant[];
  userLocation: { lat: number; lng: number } | null;
  selectedRestaurant: Restaurant | null;
  onRestaurantSelect: (restaurant: Restaurant) => void;
  routePoints?: Restaurant[];
}

export function MapView({
  restaurants,
  userLocation,
  selectedRestaurant,
  onRestaurantSelect,
  routePoints = [],
}: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const userMarkerRef = useRef<any>(null);
  const polylinesRef = useRef<any[]>([]);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50;
    
    const checkSDK = setInterval(() => {
      console.log(`🔍 Kakao SDK 확인 중... (${retryCount + 1}/${maxRetries})`);
      console.log('window.kakao:', window.kakao);
      console.log('window.kakao.maps:', window.kakao?.maps);
      console.log('window.kakaoMapsReady:', window.kakaoMapsReady);
      
      // kakaoMapsReady 플래그가 true일 때만 초기화
      if (window.kakao && window.kakao.maps && window.kakaoMapsReady) {
        console.log('✅ Kakao SDK 완전 준비!');
        clearInterval(checkSDK);
        setSdkLoaded(true);
        
        setTimeout(() => {
          initializeMap();
        }, 100);
      } else if (retryCount >= maxRetries) {
        console.error('❌ Kakao SDK 타임아웃');
        clearInterval(checkSDK);
      }
      retryCount++;
    }, 200);

    return () => {
      clearInterval(checkSDK);
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const initializeMap = () => {
    console.log('🗺️ 지도 초기화 시도...');
    
    if (!mapRef.current) {
      console.error('❌ mapRef가 없습니다');
      return;
    }
    
    if (mapInstanceRef.current) {
      console.log('⚠️ 지도가 이미 초기화되었습니다');
      return;
    }
    
    if (!window.kakao || !window.kakao.maps) {
      console.error('❌ window.kakao.maps가 없습니다');
      return;
    }

    try {
      const kakao = window.kakao;
      
      console.log('kakao.maps.LatLng:', kakao.maps.LatLng);
      
      const centerPosition = userLocation
        ? new kakao.maps.LatLng(userLocation.lat, userLocation.lng)
        : new kakao.maps.LatLng(37.5665, 126.9780);

      console.log('📍 지도 중심:', centerPosition);

      const options = {
        center: centerPosition,
        level: 5,
      };

      const map = new kakao.maps.Map(mapRef.current, options);
      mapInstanceRef.current = map;
      
      console.log('✅ 지도 생성 완료!');

      if (userLocation) {
        updateUserMarker(userLocation);
      }

      updateRestaurantMarkers();
    } catch (error) {
      console.error('❌ 지도 생성 실패:', error);
      console.error('에러 상세:', error.stack);
    }
  };

  const updateUserMarker = (location: { lat: number; lng: number }) => {
    if (!mapInstanceRef.current || !window.kakao) return;

    const kakao = window.kakao;

    if (userMarkerRef.current) {
      userMarkerRef.current.setMap(null);
    }

    const markerPosition = new kakao.maps.LatLng(location.lat, location.lng);

    const imageSrc =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='8' fill='%23d97706' stroke='white' stroke-width='3'/%3E%3C/svg%3E";
    const imageSize = new kakao.maps.Size(24, 24);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
      map: mapInstanceRef.current,
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: '<div style="padding:5px 10px;font-size:12px;">현재 위치</div>',
    });

    kakao.maps.event.addListener(marker, "click", () => {
      infowindow.open(mapInstanceRef.current, marker);
    });

    userMarkerRef.current = marker;
  };

  const updateRestaurantMarkers = () => {
    if (!mapInstanceRef.current || !window.kakao) return;

    const kakao = window.kakao;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    restaurants.forEach((restaurant, index) => {
      const markerPosition = new kakao.maps.LatLng(restaurant.lat, restaurant.lng);
      const isSelected = selectedRestaurant?.id === restaurant.id;
      const routeIndex = routePoints.findIndex((r) => r.id === restaurant.id);
      const isInRoute = routeIndex !== -1;

      let imageSrc;
      if (isInRoute) {
        imageSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='45' viewBox='0 0 36 45'%3E%3Cpath d='M18 0C8.059 0 0 8.059 0 18c0 13.5 18 27 18 27s18-13.5 18-27c0-9.941-8.059-18-18-18z' fill='%23d97706'/%3E%3Ccircle cx='18' cy='18' r='12' fill='white'/%3E%3Ctext x='18' y='23' text-anchor='middle' font-size='14' font-weight='bold' fill='%23d97706'%3E${routeIndex + 1}%3C/text%3E%3C/svg%3E`;
      } else if (isSelected) {
        imageSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='45' viewBox='0 0 36 45'%3E%3Cpath d='M18 0C8.059 0 0 8.059 0 18c0 13.5 18 27 18 27s18-13.5 18-27c0-9.941-8.059-18-18-18z' fill='%23dc2626'/%3E%3Ccircle cx='18' cy='18' r='8' fill='white'/%3E%3C/svg%3E";
      } else {
        imageSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='38' viewBox='0 0 30 38'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c0 11.25 15 22.5 15 22.5S30 26.25 30 15C30 6.716 23.284 0 15 0z' fill='%23ea580c'/%3E%3Ccircle cx='15' cy='15' r='6' fill='white'/%3E%3C/svg%3E";
      }

      const imageSize = isInRoute || isSelected
        ? new kakao.maps.Size(36, 45)
        : new kakao.maps.Size(30, 38);
      const imageOption = {
        offset: isInRoute || isSelected
          ? new kakao.maps.Point(18, 45)
          : new kakao.maps.Point(15, 38),
      };

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
        map: mapInstanceRef.current,
        zIndex: isInRoute ? 10 : isSelected ? 5 : 1,
      });

      const infowindowContent = `
        <div style="padding:10px;min-width:200px;">
          <div style="font-weight:600;margin-bottom:4px;">${restaurant.name}</div>
          <div style="font-size:12px;color:#666;margin-bottom:4px;">${restaurant.category}</div>
          <div style="font-size:12px;color:#666;">⭐ ${restaurant.rating.toFixed(1)} (${restaurant.reviewCount})</div>
          <div style="font-size:12px;color:#666;margin-top:4px;">${restaurant.distance.toFixed(1)}km</div>
        </div>
      `;

      const infowindow = new kakao.maps.InfoWindow({
        content: infowindowContent,
      });

      kakao.maps.event.addListener(marker, "click", () => {
        markersRef.current.forEach((m) => {
          if (m.infowindow) {
            m.infowindow.close();
          }
        });
        infowindow.open(mapInstanceRef.current, marker);
        onRestaurantSelect(restaurant);
      });

      marker.infowindow = infowindow;
      markersRef.current.push(marker);
    });
  };

  const drawRoute = () => {
    if (!mapInstanceRef.current || !window.kakao || routePoints.length === 0) return;

    const kakao = window.kakao;

    polylinesRef.current.forEach((polyline) => polyline.setMap(null));
    polylinesRef.current = [];

    const path: any[] = [];
    
    if (userLocation) {
      path.push(new kakao.maps.LatLng(userLocation.lat, userLocation.lng));
    }

    routePoints.forEach((restaurant) => {
      path.push(new kakao.maps.LatLng(restaurant.lat, restaurant.lng));
    });

    if (path.length > 1) {
      const polyline = new kakao.maps.Polyline({
        path: path,
        strokeWeight: 4,
        strokeColor: '#d97706',
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
      });

      polyline.setMap(mapInstanceRef.current);
      polylinesRef.current.push(polyline);

      const bounds = new kakao.maps.LatLngBounds();
      path.forEach((point) => bounds.extend(point));
      mapInstanceRef.current.setBounds(bounds);
    }
  };

  useEffect(() => {
    if (userLocation && mapInstanceRef.current && window.kakao) {
      updateUserMarker(userLocation);
      const moveLatLon = new window.kakao.maps.LatLng(userLocation.lat, userLocation.lng);
      mapInstanceRef.current.setCenter(moveLatLon);
    }
  }, [userLocation]);

  useEffect(() => {
    if (mapInstanceRef.current && window.kakao) {
      updateRestaurantMarkers();
    }
  }, [restaurants, selectedRestaurant, routePoints]);

  useEffect(() => {
    if (selectedRestaurant && mapInstanceRef.current && window.kakao) {
      const moveLatLon = new window.kakao.maps.LatLng(
        selectedRestaurant.lat,
        selectedRestaurant.lng
      );
      mapInstanceRef.current.panTo(moveLatLon);
    }
  }, [selectedRestaurant]);

  useEffect(() => {
    if (routePoints.length > 0) {
      drawRoute();
    }
  }, [routePoints]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full" style={{ minHeight: '400px' }} />
      {!sdkLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-2 text-primary animate-bounce" />
            <p className="text-gray-700 text-sm">지도를 로딩하는 중...</p>
            <p className="text-xs text-gray-500 mt-2">
              Kakao SDK를 기다리는 중입니다
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
