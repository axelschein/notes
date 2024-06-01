import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TextBox from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <TextBox {...{...INITIAL_PROPS, ...newProps}} />
);

describe('TextBox Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders TextBox', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});