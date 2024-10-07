import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const d = new Date();
let year = d.getFullYear();

test('renders header', () => {
    render(<Header />);
    const headerElement = screen.getByText(/E-Commerce Site/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders footer', () => {
    render(<Footer />);
    const footerElement = screen.getByText(new RegExp(`© ${year} E-Commerce Site`, 'i'));
    expect(footerElement).toBeInTheDocument();
});

test('renders product list', () => {
    render(<ProductList />);
    const productElement = screen.getByText(/Product List/i);
    expect(productElement).toBeInTheDocument();
});
