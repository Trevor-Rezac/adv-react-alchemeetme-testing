import { render, screen } from '@testing-library/react'
import App from './App';

describe('App.jsx tests', () => {
  
  it('Should render the header image and profile name', async () => {
    render(
    <App />
    );
    const headerImg = await screen.findByAltText('Alchemy Logo');
    const profileName = await screen.findByText('Vonta');
  })
})

