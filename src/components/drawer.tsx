import { FunctionComponent } from 'react';

type DrawerProps = {
    header: string,
    body: any,
    footer: any,
    onClose: Function,
    visible: boolean
}
const Drawer: FunctionComponent<DrawerProps> = ({ header, body, footer, visible, onClose }) => {
    return (
        <div className={visible ? 'drawer' : 'invisible'}>
            <div>
                <div className='close' onClick={()=>onClose()}></div>
                
                <div className='drawer-header'>{header}</div>
                
                {body}
               
            </div>
            
            <div className='drawer-footer'>{footer}</div>
        </div>
    )
}

export default Drawer;