export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  disabled?: boolean;
  color?: "default" | "white " | " blue";
}
export interface CustomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  leftIcon?: React.ReactNode;
}
export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  color?: "white" | "black" | "blue" | "#1A2B60";
  className?: string;
}
export interface VideoProps {
  id: number | string;
  title: string;
  caption: string;
  location: string;
  videoUrl: string;
  image: any;
  name?: string;
}
