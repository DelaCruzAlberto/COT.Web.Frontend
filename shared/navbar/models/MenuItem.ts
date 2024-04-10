export interface MenuItem {
  label: string;
  href?: string;
  icon?: string;
  hasChildren?: boolean;
  children?: MenuItem[];
  isOpen?: boolean;
}
