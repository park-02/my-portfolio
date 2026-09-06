export interface InfoItem {
  id: number;
  label: string;
  value: string;
}

export const INFO_ITEMS: InfoItem[] = [
  { 
    id: 1, 
    label: '이름', 
    value: '박성현' 
  },
  { 
    id: 2, 
    label: '생년월일', 
    value: '2002.12.05' 
  },
  { 
    id: 3, 
    label: '거주지', 
    value: '경기도 안산' 
  },
  { 
    id: 4, 
    label: '학력', 
    value: '한세대학교 컴퓨터공학과' 
  },
];