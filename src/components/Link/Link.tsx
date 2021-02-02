import styled from 'styled-components';
import NextLink from 'next/link';

const MyLink = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <a {...props}>
      {children}
    </a>
  </NextLink>
);


const Link = styled(MyLink)`
  text-decoration: none;
`;

interface PageLinksProps {
  description: string;
  href: string;
  linkLearned?: string;
}

export default Link;
