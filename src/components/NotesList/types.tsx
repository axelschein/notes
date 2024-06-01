export interface NotesListProps {
    isLoading: boolean;
    data: NotesListData[];
}
export interface NotesListData {
    id: string;
    text: string;
}