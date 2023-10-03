import { Link } from 'react-router-dom';
import * as C from './styles';
import {ReactComponent as ProfileIcon} from '../../svg/profile.svg'
import {ReactComponent as BookIcon} from '../../svg/book.svg'
import {ReactComponent as MailIcon} from '../../svg/mail.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
}


export const SidebarItem = ({ title, description, icon, path }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea>
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24}/>
                    }
                    {icon === 'book' && 
                        <BookIcon fill="white" width={24} height={24}/>
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24}/>
                    }
                </C.IconArea>
                <C.Point></C.Point>
            </Link>
        </C.Container>
    );
};

