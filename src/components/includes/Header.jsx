import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LogoImg from '../../assets/images/Logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import LikeIcon from '../../assets/images/wishlist.svg';
import UserIcon from '../../assets/images/account.svg';
import CartIcon from '../../assets/images/cart.svg';
import InputBase from '@mui/material/InputBase';

export default function Header() {

  const nav_bar = [
    {
      path: '/',
      display: 'Shop'
    },
    {
      path: '/',
      display: 'Men'
    },
    {
      path: '/',
      display: 'Women'
    },
    {
      path: '/',
      display: 'Combos'
    },
    {
      path: '/',
      display: 'Joggers'
    }
  ]

//Styling --

//Wrapper
  const Wrapper = styled(Box)(({theme})=>({
    paddingInline: '102px',
    paddingBlock: '31px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
}))

//Logo 
  const Logo = styled("img")(({theme})=>({
    width:'91.16px',
    height:'45px',
    cursor: 'pointer'
  }))
//Nav List
  const NavList = styled(Box)(({theme})=>({
    display:'flex',
    gap: theme.spacing(2),
    justifyContent:'center',
    color:'#807D7E',
    padding:'12px 0',
    cursor: 'pointer',
    fontSize:'22px',
    '& a':{
      textDecoration:'none',
      color:'black',
      fontWeight:'500px'
    },
    '&:hover':{
      color:'#3C4242',
      fontWeight:'bold'
    }
  }))
//Search Bar
  const Search = styled(Box)(({theme})=>({
    display:'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#F6F6F6',
    borderRadius:'8px',
    width: '267px',
    height:'44px',
  }))
  const SearchIconWrapper =styled(Box)(({theme})=>({
    
  }))
  const StyledInputBase = styled(InputBase)(({theme})=>({
    fontFamily: 'poppinsregular',
    display: 'flex',
    alignItems: 'center'
  }))

//Nav Icons - Like, User, Cart
  const IconWrapper = styled(Box)(({theme})=>({
    width:'44px',
    height:'44px',
    cursor:'pointer',
    backgroundColor:'#F6F6F6',
    borderRadius:'8px',
    '&:hover':{
      backgroundColor:'#fff'
    }
  }))
  const NavIcon = styled("img")(()=>({
    cursor:'pointer',
    padding:'12px',
    alignItems:'center',
    justifyContent:'center',
    '&:hover':{
      color:'blue'
    }
  }))

  return (
    <Box>
     <Wrapper>
      <Box>
        <Link to={'/Homepage'}>
          <Logo src={LogoImg}
            alt="Logo image"
          />
        </Link>
        </Box>
        <Box
          sx={{
            display:'flex',
            width:'483px',
            justifyContent: 'space-between'
          }}
        >
          {
            nav_bar.map((item,index)=>(
              <NavList>
                {item.display}
              </NavList>
            ))
          }
        </Box>
        <Box
          sx={{
            display:'flex',
            gap:'1rem',
            justifyContent:'center'
          }}
        >
          <Search>
              <SearchIconWrapper>
                <SearchIcon 
                  sx={{
                    color:'#807D7E',
                    cursor: 'pointer'
                  }}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'poppinsregular': 'search' }}
              />
            </Search>
          <Box
            sx={{
              display:'flex',
              gap:'1rem'
            }}
          >
            <IconWrapper>
                <NavIcon src={LikeIcon} 
                alt="Like icon" 
                />
            </IconWrapper>
            <IconWrapper>
                <NavIcon src={UserIcon} 
                alt="User icon" 
                />
            </IconWrapper>
            <IconWrapper>
                <NavIcon src={CartIcon} 
                alt="Cart icon" 
                />
            </IconWrapper>
          </Box>
        </Box>
     </Wrapper>
    </Box>
    
  )
}
