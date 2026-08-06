// ─────────────────────────────────────────────────────────────
//  기기 간 동기화용 Firebase 설정 (PC ↔ 폰)
// ─────────────────────────────────────────────────────────────
//  이미 채워져 있어서 별도 설정 없이 바로 동기화가 됩니다.
//  (삿포로 여행앱과 같은 Firebase 프로젝트를 재사용하지만,
//   'kana-...' 접두어 문서에 저장해 여행 데이터와 절대 섞이지 않아요.)
//
//  사용법: 앱의 ⚙️설정 > "기기 간 동기화"에서 PC와 폰에
//         같은 연결 코드를 넣으면 진도가 실시간으로 함께 저장됩니다.
//  값을 비우면 → 이 기기에만 저장되는 오프라인 모드로 동작합니다.
// ─────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyD9MENjz8a547N04mZSYrGRua7R_7kFKwY",
  authDomain: "sapporo-travel-fb56a.firebaseapp.com",
  projectId: "sapporo-travel-fb56a",
  storageBucket: "sapporo-travel-fb56a.firebasestorage.app",
  messagingSenderId: "158423848542",
  appId: "1:158423848542:web:11b8312fcb64bc090906cf"
};
