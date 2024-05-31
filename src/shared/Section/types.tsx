

export interface SectionProps {
    isLoading?: boolean;
    title: string;
    subTitle?: string;
    titleSize?: number;
    children: JSX.Element;
    width: string;
}

export interface SectionTitleProps {
    titleSize?: number;
}
export interface SectionWrapperProps {
    width?: string;
}