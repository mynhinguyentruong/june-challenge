import { render, fireEvent } from '@testing-library/react';
import BookForm from '../../src/components/BookForm';
import { describe, expect, test } from 'vitest';
import { store } from '../../src/store';
import { Provider } from 'react-redux'


describe('BookForm' , () => {
    test('should update form state on input change', () => {
        const { getByLabelText } = render(<Provider store={store}><BookForm/></Provider>)

        const nameInput = getByLabelText('What is your book title/name?');
        const priceInput = getByLabelText('How much you are selling it for?');
        const imageSrcInput = getByLabelText('What is your book image?');
        const imageAltInput = getByLabelText('Please provide an alt for your image!');

        fireEvent.change(nameInput, { target: { value: 'Book Title' } });
        fireEvent.change(priceInput, { target: { value: '$9.99' } });
        fireEvent.change(imageSrcInput, {
            target: { value: 'https://example.com/image.jpg' },
        });
        fireEvent.change(imageAltInput, { target: { value: 'Book cover alt' } });

        expect(nameInput.value).toBe('Book Title');
        expect(priceInput.value).toBe('$9.99');
        expect(imageSrcInput.value).toBe('https://example.com/image.jpg');
        expect(imageAltInput.value).toBe('Book cover alt');
    })
})
