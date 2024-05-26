import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TextInputField from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <TextInputField {...{...INITIAL_PROPS, ...newProps}} />
);

describe('TextInputField Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders TextInputField', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});