

export interface SectionProps {
    isLoading?: boolean;
    // icon: JSX.Element;
    title: string;
    subTitle?: string;
    titleSize?: number;
    children: JSX.Element;
    // editSectionTitle?: string;
    // editSectionCallback?: () => any;
}

export interface SectionTitleProps {
    titleSize?: number;
}