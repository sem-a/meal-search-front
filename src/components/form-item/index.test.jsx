import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    CustomInput,
    CustomSelect,
    CustomTextarea,
    CustomButton,
    CustomLabel,
    FormItem,
    FormFlex,
} from './index'
import '@testing-library/jest-dom';

describe('Component Rendering', () => {
    it('renders CustomInput', () => {
        render(<CustomInput type="text" placeholder="Input" />);
        expect(screen.getByPlaceholderText('Input')).toBeInTheDocument();
    });

    it('renders CustomSelect', () => {
        render(<CustomSelect options={['Option 1', 'Option 2']} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders CustomTextarea', () => {
        render(<CustomTextarea placeholder="Textarea" />);
        expect(screen.getByPlaceholderText('Textarea')).toBeInTheDocument();
    });

    it('renders CustomButton', () => {
        render(<CustomButton>Button</CustomButton>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    it('renders CustomLabel', () => {
        render(<CustomLabel htmlFor="test">Label</CustomLabel>);
        expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('renders FormItem', () => {
        render(<FormItem><p>Test</p></FormItem>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('renders FormFlex', () => {
        render(<FormFlex><p>Test</p></FormFlex>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('renders nested components', () => {
        render(
            <FormItem>
                <CustomLabel htmlFor="test">Label</CustomLabel>
                <CustomInput type="text" placeholder="Input" />
            </FormItem>
        );
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Input')).toBeInTheDocument();
    });
});

