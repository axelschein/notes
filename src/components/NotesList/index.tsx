import React from 'react';
import { NotesListProps } from './types';
import { NotesListWrapper } from './styles';
import TextBox from '../../shared/TextBox';

const NotesList = ({ isLoading, data }: NotesListProps): JSX.Element => {
    return (
        <NotesListWrapper>
            {data.map((item)=> <TextBox isLoading={isLoading} text={item.text} key={item.id}/>)}
        </NotesListWrapper>
    )
};

export default NotesList;