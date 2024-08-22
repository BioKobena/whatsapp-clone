import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: column;
width: 95%;
height:100%;
flex:0.8;
`;


const ProfilInfoDiv = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:15px;
`;

const ProfilImage = styled.img`
width:50px;
height:50px;
border-radius:50%;
`;

const SearchBox = styled.div`
display:flex;
background:#f6f6f6;
padding:10px;
`;

const SearchContainer = styled.div`
display:flex;
flex-direction:row;
background:white;
border-radius: 10px;
width:100%;
padding: 20px 0;
`;

const SearchIcon = styled.img`
width:25px;
height:25px;
padding-left:10px;
`;

const SearchInput = styled.input`
width:100%;
outline:none;
border:none;
font-size:14px;
`;


const ContactItem = styled.div`
display:flex;
flex-direction:row;
width:90%;
border-bottom: 1px solid #f2f2f2;
background:white;
cursor: pointer;
padding: 15px;
`;

const ProfileIcon = styled(ProfilImage)`
width:38px;
height:38px;
`;


const ContactInfo = styled.div`
font-size:16px;
width:100%;
color:black;
margin:0 19px;
`;

const MessageText = styled.span`
width:100%;
font-size:14px;
margin-top:3px;
color:rgba(0, 0, 0, 0.8);
`;

const ContactName = styled.div`
display:flex;
flex-direction:column;
width:100%;
`;

const ContactComponent = () => {
    return (
        <ContactItem>
            <ProfilImage src="https://cdn2.iconfinder.com/data/icons/covid-19-1/64/12-Mask-512.png" />
            <ContactInfo>
                <ContactName>Bio Paul Kobena</ContactName>
                <MessageText>Hello how are you ?</MessageText>
            </ContactInfo>
            <MessageText>10:00 PM</MessageText>
        </ContactItem>
    )
}

const ContactList = () => {
    return (
        <Container>
            <ProfilInfoDiv>
                <ProfilImage src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-128.png" />
            </ProfilInfoDiv>

            <SearchBox>
                <SearchContainer>
                    <SearchIcon src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png" />
                    <SearchInput placeholder="Rechercher ou commmencer une nouvelle discussion" />
                </SearchContainer>
            </SearchBox>

            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
        </Container>
    )
}

export default ContactList