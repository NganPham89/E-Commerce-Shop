import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width:60%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Nick Pham</Logo>
                <Description>Rose Shop</Description>
                <SocialContainer>
                    <SocialIcon color="#4867AA"><FacebookIcon /></SocialIcon>
                    <SocialIcon color='#F502BE'><InstagramIcon /></SocialIcon>
                    <SocialIcon color="#1DA1F2"><TwitterIcon /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{marginRight: "10px"}}/>
                    1234 Road Street, City, NY
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight: "10px"}}/>
                    (678) 123-4560
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight: "10px"}}/>
                    contact@nickpham.mail
                </ContactItem>

                <Payment src='https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png'/>
            </Right>
        </Container>
    )
}

export default Footer