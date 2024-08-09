export interface NavigationItem {
    icon: any;
    label: string;
    onPress: () => void;
    isActive: boolean;
  }
  
  export interface NavigationBarProps {
    items: NavigationItem[];
  }
  