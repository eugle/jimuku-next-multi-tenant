'use client';

import Frame, {FrameContextConsumer} from 'react-frame-component'

export default function Components ({item}) {
    const Content = item.content;
    
    return (
        <Frame style={{}}>
            <FrameContextConsumer>
                {({document}) => {
                    return (
                        <StyleSheetManager target={document.head}>
                            <Div className="change-scroll"
                                 style={{}}
                            >
                                <Content />
                            </Div>
                        </StyleSheetManager>
                    )
                }}
            </FrameContextConsumer>
        </Frame>
    )
}