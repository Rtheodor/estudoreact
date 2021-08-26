import React from 'react';

import useForm from './useForm';
import { 
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';


function App(){
    const [{values}, handleChange, handleSubmit] = useForm();
    
    const [isOpen, setIsOpen] = useForm();

    const toggle = () => setIsOpen(!isOpen);
   
    const enviarUsuario=()=>{
        alert(`${values.name}`);
    }

    return(
        

    <div>
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/rafael-da-cunha-theodoro/">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Rtheodor">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contatos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="https://linktr.ee/Rtheodoro">
                  Linktr.ee</a>
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
        <h1>Cadastro</h1>
       
        <p>Nome: {values.name}</p>
        <p>E-mail: {values.email}</p>
        <form onSubmit={handleSubmit(enviarUsuario)}> 
            <label className='nomeTitulo'>Nome: </label>
            <input onChange={handleChange} type="text" name="name" placeholder="Digite o nome completo" /><br/><br/>

            <label>E-mail: </label>
            <input onChange={handleChange} type="text" name="email" placeholder="Digite o E-mail completo" /><br/><br/>

            <button type="submit">Enviar</button> 
            
            <Button color="danger"> Danger! </Button><br /><br /><br />
            
        
        </form>
        
    </div>
    )
}

export default App;