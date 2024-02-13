import React from 'react';
import {
	Flex,
	Box,
	Heading,
	Link,
	Switch,
	Text,
	Icon,
	Image,
	useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { PiListLight } from 'react-icons/pi';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
	const textDisplay = useBreakpointValue({ base: 'none', xl: 'flex' });
	const linksDisplay = useBreakpointValue({ base: 'none', lg: 'flex' });
	const listIconDisplay = useBreakpointValue({ base: 'flex', lg: 'none' });

	// 	breakpoints: {
	// 		sm: '30em', // 450px
	// 		md: '48em', // 768px
	// 		lg: '62em', // 992px
	// 		xl: '80em', // 1280px
	// 		'2xl': '96em', // 1536px
	// 	},

	const [activeLink, setActiveLink] = useState('link2');
	const [isActive, setIsActive] = useState(true);

	const linkHandler = link => {
		setActiveLink(link);
	};

	const handleChange = () => {
		setIsActive(!isActive);
	};

	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			padding='1.5rem'
			bg='white'
			boxShadow='md'
			color='black'>
			<Flex align='center' mr={5} ml={10}>
				<Image
					src='asset-1.png'
					alt='Logo'
					width={'30px'}
					height={'30px'}
					mr={3}
					// boxSize={'50px'}
				/>
				<Heading as='h1' size='lg' letterSpacing='1px'>
					Logo
				</Heading>
			</Flex>

			<Box
				alignItems='center'
				justifyContent='flex-start'
				flexGrow={1}
				display={linksDisplay}>
				<Box>
					<Link
						href='#'
						fontWeight={700}
						mr={4}
						padding='40px'
						transition='border-bottom 0.3s'
						_active={{ color: 'blue', borderBottomColor: 'blue' }}
						_hover={{ color: 'blue' }}
						borderBottom={activeLink === 'link1' ? '4px solid blue' : 'none'}
						onClick={() => linkHandler('link1')}
						color={activeLink === 'link1' ? 'blue' : 'none'}
						ml={8}>
						Dashboard
					</Link>

					<Link
						href='#'
						fontWeight={700}
						mr={4}
						padding='40px'
						transition='border-bottom 0.3s'
						_active={{ color: 'blue', borderBottomColor: 'blue' }}
						_hover={{ color: 'blue' }}
						borderBottom={activeLink === 'link2' ? '4px solid blue' : 'none'}
						onClick={() => linkHandler('link2')}
						color={activeLink === 'link2' ? 'blue' : 'none'}
						ml={8}>
						Resources
					</Link>

					<Link
						href='#'
						fontWeight={700}
						mr={4}
						padding='40px'
						transition='border-bottom 0.3s'
						_active={{ color: 'blue', borderBottomColor: 'blue' }}
						_hover={{ color: 'blue' }}
						borderBottom={activeLink === 'link3' ? '4px solid blue' : 'none'}
						onClick={() => linkHandler('link3')}
						color={activeLink === 'link3' ? 'blue' : 'none'}
						ml={8}>
						Toolkit
					</Link>
				</Box>
			</Box>

			<Box
				display={'flex'}
				alignItems='center'
				justifyContent={{ base: 'center', md: 'flex-end' }}
				mr={10}
				flexGrow={1}>
				<Switch isChecked={isActive} onChange={handleChange} mr={4} />
				<Text
					borderRight='1px solid'
					paddingRight='15px'
					fontWeight='bold'
					display={textDisplay}>
					Switch to Employee
				</Text>
				<Flex ml={2} fontWeight='bold'>
					<Text
						backgroundColor='#17E4A1'
						borderRadius='90%'
						display='inline'
						margin='10px'
						padding='5px'
						letterSpacing='2px'
						fontWeight='bold'
						fontSize='14px'
						textDecor='none'
						textTransform='uppercase'>
						JA
					</Text>
					<Text mt={3} display={textDisplay}>
						Jonathan
						<Icon
							as={ChevronDownIcon}
							color='black'
							ml={1}
							mt={1}
							cursor={'pointer'}
						/>
					</Text>
					<Icon
						as={PiListLight}
						color='black'
						ml={1}
						marginTop='5px'
						pl='15px'
						cursor={'pointer'}
						width='40px'
						height='40px'
						display={listIconDisplay}
					/>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
