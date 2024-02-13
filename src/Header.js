import React from 'react';
// import { useState } from 'react';
import {
	Input,
	Box,
	Heading,
	Text,
	InputLeftElement,
	InputGroup,
	Icon,
	Flex,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

function Header() {
	// 	breakpoints: {
	// 		sm: '30em', // 450px
	// 		md: '48em', // 768px
	// 		lg: '62em', // 992px
	// 		xl: '80em', // 1280px
	// 		'2xl': '96em', // 1536px
	// 	},

	return (
		<Flex direction='column' alignItems='center'>
			<Box textAlign='center'>
				<Heading as='h1' size='lg' mb={2} mt='80px' fontSize={'40px'}>
					Resources
				</Heading>
				<Text
					fontSize='sm'
					color='gray.500'
					mb={4}
					mt='35px'
					width='58%'
					ml='50%'
					transform='translate(-50%, -50%)'>
					Consectetur adepiscing elit duis tristique sollicitudin nibh sit amet
					commodo nulla facilisi nulla vehicula ipsum a arcu cursus vitae congue
				</Text>
			</Box>
			<Flex justifyContent='center' width={{ base: '50%', lg: 'flex' }}>
				<InputGroup mt='25px' mb='50px' width='850px'>
					<InputLeftElement
						pointerEvents='none'
						children={<Icon as={Search2Icon} color='gray.300' />}
					/>
					<Input type='text' placeholder='Search by title or keyword' />
				</InputGroup>
			</Flex>
			;
		</Flex>
	);
}

export default Header;
