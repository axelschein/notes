import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NotesList from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <NotesList {...{...INITIAL_PROPS, ...newProps}} />
);

describe('NotesList Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders NotesList', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});