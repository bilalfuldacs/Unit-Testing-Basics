import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting_Coponent", () => {
  

  test('before clicked',()=>{
    render(<Greeting />);
    const linkElement = screen.getByText(/i a here with changed text/i); 
    expect(linkElement).toBeInTheDocument();
  })
  test('after clicked',()=>{
    render(<Greeting />);
    const button = screen.getByText('Change Text'); 
    userEvent.click(button);
    //assert step
    const linkElement = screen.getByText('i a here withoutbefore_clicked changed text'); 
    expect(linkElement).toBeInTheDocument();
   
  })
  test('after clicking button ',()=>{
    render(<Greeting />);
    const button = screen.getByText('Change Text'); 
    userEvent.click(button);
    //assert step
    const linkElement = screen.queryByText(/i a here with changed text/i); 
    expect(linkElement).not.toBeInTheDocument();
   
  })
});
