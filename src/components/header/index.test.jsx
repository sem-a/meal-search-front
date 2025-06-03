import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Необходимо для Link
import Header from './index'; // Замените на путь к вашему файлу
import { PATHS } from '../../paths';
import '@testing-library/jest-dom';


jest.mock('../../paths', () => ({
    PATHS: {
        home: '/',
        add: '/add',
    },
}));


describe('Header component rendering', () => {
    it('renders Header component with links and logo', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByRole('link', { name: /Главная/i })).toBeInTheDocument();
        expect(screen.getByText(/MealSearch/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Добавить/i })).toBeInTheDocument();
    });
});

