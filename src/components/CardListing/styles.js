import styled from 'styled-components'

export const Card = styled.div`
    display: inline-block;
    width: 100%;
    max-width: 320px;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(22, 25, 102, .06);
    border-radius: 10px;
    transition: box-shadow .2s ease-in;

    &:hover {
        box-shadow: 0px 2px 30px rgba(22, 25, 102, .1);
    }

    @media only screen and (max-width: 575px) {
        width: auto;
        margin-top: 20px;
    }
`

export const Ratio = styled.div`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: 62.5%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url('${props => props.image || ''}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;

`

export const Thumbnail = styled.div`
    position: absolute;
    top: 0;
    transition: transform .2s ease-in;

    ${Card}:hover & {
        transform: scale(1.1);
    }
`

export const Label = styled.span`
    padding: 7px 10px;
    border-radius: 6px;
    font-size: 12px;
    color: #FFF;
    letter-spacing: -.12px;
    background: ${props => props.color || null};
    position: absolute;
    bottom: 20px;
    left: 20px;
`

export const Meta = styled.div`
    padding: 20px;
`

export const Date = styled.h4`
    font-size: 12px;
    color: rgba(33, 33, 33, .4);
`

export const Title = styled.h4`
    font-size: 14px;
    color: #212121;
    margin-top: 8px;
    height: 40px;
    line-height: 22px;
    overflow: hidden;
`

export const Donor = styled.div`
    display: inline-block;
    font-size: 14px;
    color: rgba(33, 33, 33, .6);
    letter-spacing: -.14px;
    margin-bottom: 16px;
`

export const Content = styled.p`
    font-size: 12px;
    letter-spacing: -.12px;
    color: rgba(33, 33, 33, .6);
    line-height: 22px;
    height: 62px;
    overflow: hidden;
    margin-bottom: 30px;
`

export const ReadMore = styled.span`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -.12px;
    color: #212121;
    position: relative;
    left: 12px;
`
