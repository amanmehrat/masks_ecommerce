import React, { useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import { ethers } from "ethers";
import Message from './Message'


const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const { state, pathname } = useLocation();

  const connectWalletHandler = () => {
    localStorage.clear("eth_id");
    localStorage.clear("eth_bal");
    setSuccess(null);
    setError(null);
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(result => {
          console.log(result);
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          setSuccess("Wallet Connected Successfully !!!");
          getAccountBalance(result[0]);
        })
        .catch(error => {
          setError(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setError("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = newAccount => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = account => {
    localStorage.setItem("eth_id", account);
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then(balance => {
        console.log(balance);
        setUserBalance(ethers.utils.formatEther(balance));
        localStorage.setItem("eth_bal", ethers.utils.formatEther(balance));
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect style={{
        backgroundSize: "100% 238%",
        backgroundImage: "url('https://potd.pdnonline.com/wp-content/uploads/2019/09/Naga-Raksha-Mask-Central-Sri-Lanka.jpg')"
      }}>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>NAGA MASKS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              {!defaultAccount && (
                <>
                  <button onClick={connectWalletHandler} type="button" className="btn btn-dark btn-sm" style={{ fontSize:"font-size: 100%"}}>
                    <i className="fas fa-wallet"></i> Connect Wallet!
                  </button>
                </>

              )}
              <LinkContainer to='/cart' >
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {success && <Message variant='success'>{ success}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
    </header>
  )
}

export default Header
