import { ReactNode } from 'react';
import * as C from './styled';
import {Header} from '../Header';
import { SidebarItem } from '../SidebarItem';
 
type Props = {
    children: ReactNode;

}

export const Theme = ({ children }: Props) =>{
    return (
        <C.Conteiner>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile "
                            path="/"
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="bool"
                            path="/step2"
                        />

                        <SidebarItem
                            title="Contato"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Conteiner>
    ); 
}