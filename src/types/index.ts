export interface TextProps {
  title: string;
  fontColor?: string;
  fontFamily?: string;
  textSize?: number;
  style?: any;
}

export interface ButtonProps {
  title?: string;
  isPrimary?: boolean;
  width?: string | number;
  iconName?: string;
  onButtonPress?: () => void;
}

export interface ServiceProps {
  machineName: string;
  machineNo: string;
  desc: string;
  serviceCount: string;
}
