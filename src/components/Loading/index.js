import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import {Container, ImageDiv} from './styles';

const Loading = () => {
    return(
        <Container>
            <SkeletonTheme color="#636362">
                <ImageDiv>
                    <Skeleton circle={true} height={95} width={120}/>
                </ImageDiv>
                
                <div>
                    <Skeleton count={2} width={180}/>
                </div>

                <Skeleton height={30} width={180}/>
            </SkeletonTheme>
        </Container>
    )
}

export default Loading;