import NextHead from 'next/head'

export default function Head({title}){
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="description"
        content="Landingpage para o desafio da privatecode"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#252160" />
    </NextHead>
  )  
}