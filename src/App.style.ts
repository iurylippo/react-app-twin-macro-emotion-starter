import tw, { styled }  from 'twin.macro'

export const AppTitle = tw.h1`
    text-2xl
    text-green-500
`;

interface AppConditionalProps {
    hasBorder: boolean
}

export const AppConditional = styled.div(({ hasBorder }: AppConditionalProps) => [
    tw`text-white`,
    hasBorder && tw`bg-purple-300`,
]);

export const AppButton = tw.a`
    rounded 
    tracking-wide 
    cursor-pointer 
    py-1.5 
    px-4 
    text-white 
    font-bold 
    bg-primary-500
`