import react from 'react'
import { useNavigate } from 'react-router-dom'
import './directory-item.styles.jsx'
import { BackgroundImage, Content, DirectoryItemContainer } from './directory-item.styles.jsx'

const DirectoryItem = ({ product }) => {
    const navigate = useNavigate();
    const { title, imageUrl, size, linkUrl } = product;
    const navigateHandler = () => navigate(linkUrl);
    return (
        <DirectoryItemContainer onClick={() => navigateHandler()}>
            <BackgroundImage imageUrl={imageUrl} />
            <Content >
                <h1>{title}</h1>
                <span>SHOW NOW</span>
            </Content>
        </DirectoryItemContainer >
    )
}
export default DirectoryItem;