import { render, screen } from '@testing-library/react'
import App from './App';

describe('App.jsx tests', () => {
  
  it('Should render the header image and profile name', async () => {
    render(
    <App />
    );
    await screen.findByAltText('Alchemy Logo');
    const profileName = await screen.findByText(/vonta/i);
    expect(profileName.textContent).toEqual('Vonta');

  })
})

