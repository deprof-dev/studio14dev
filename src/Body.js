import { React, useState } from 'react';
import { PiFilePdf } from 'react-icons/pi';
import { FiLink } from 'react-icons/fi';
import { PiVideoDuotone } from 'react-icons/pi';
import { MdOutlineFilterList } from 'react-icons/md';
import {
	Box,
	Checkbox,
	Heading,
	Stack,
	Grid,
	Text,
	Icon,
} from '@chakra-ui/react';

const Body = () => {
	// 	breakpoints: {
	// 		sm: '30em', // 450px
	// 		md: '48em', // 768px
	// 		lg: '62em', // 992px
	// 		xl: '80em', // 1280px
	// 		'2xl': '96em', // 1536px
	// 	},

	const [checkboxes, setCheckboxes] = useState({
		checkbox1: false,
		checkbox2: false,
		checkbox3: false,
		checkbox4: false,
		checkbox5: false,
		checkbox6: false,
		checkbox7: false,
		checkbox8: false,
		checkbox9: false,
		checkbox10: false,
		checkbox11: false,
		checkbox12: false,
		checkbox13: false,
		checkbox14: false,
	});

	// Function to handle checkbox changes
	const handleCheckboxChange = event => {
		const { name, checked } = event.target;
		setCheckboxes({ ...checkboxes, [name]: checked });
	};

	const [isClosed, setIsClosed] = useState(false);

	return (
		<Grid>
			<Text
				cursor={'pointer'}
				padding='10px'
				onClick={() => setIsClosed(!isClosed)}
				justifyContent={'center'}
				fontSize={'18px'}
				display={{ base: 'flex', md: 'none' }}>
				<Icon
					as={MdOutlineFilterList}
					mr={2}
					mt={1}
					onClick={() => setIsClosed(!isClosed)}
				/>{' '}
				{`${isClosed ? 'Show' : 'Hide'}`} Filters
			</Text>
			<Box
				display={{ base: 'grid', md: 'flex' }}
				marginTop={'50px'}
				gridTemplateColumns={{ base: '1fr', md: 'flex' }}>
				{/* First Pane */}
				{isClosed ? (
					''
				) : (
					<Box flex='1' padding='0 150px'>
						<div
							style={{
								backgroundColor: 'white',
								margin: '10px',
								height: '750px',
								width: 'auto',
								boxShadow: 'md',
								color: 'black',
								paddingLeft: '10px',
								marginTop: '-30px',
							}}>
							<Heading
								as='h3'
								size='md'
								mb={9}
								borderBottom='1px solid'
								paddingBottom='15px'>
								Filters
							</Heading>
							<Box>
								<Heading as='h3' size='md' mb={4} mt={5}>
									Key Foundational Principles
								</Heading>
								<Stack spacing={4}>
									<Checkbox
										isChecked={checkboxes.checkbox1}
										onChange={handleCheckboxChange}
										name='checkbox1'>
										Secure Base
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox2}
										onChange={handleCheckboxChange}
										name='checkbox2'>
										Sense of Appreciation
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox3}
										onChange={handleCheckboxChange}
										name='checkbox3'>
										Learning Organisation
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox4}
										onChange={handleCheckboxChange}
										name='checkbox4'>
										Mission and Vision
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox5}
										onChange={handleCheckboxChange}
										name='checkbox5'>
										Well-being
									</Checkbox>
								</Stack>
							</Box>

							<Box>
								<Heading as='h3' size='md' mb={4} mt={4}>
									Document type
								</Heading>
								<Stack spacing={4}>
									<Checkbox
										isChecked={checkboxes.checkbox6}
										onChange={handleCheckboxChange}
										name='checkbox6'>
										DOC
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox7}
										onChange={handleCheckboxChange}
										name='checkbox7'>
										Link
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox8}
										onChange={handleCheckboxChange}
										name='checkbox8'>
										PDF
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox9}
										onChange={handleCheckboxChange}
										name='checkbox9'>
										Video
									</Checkbox>
								</Stack>
							</Box>

							<Box>
								<Heading as='h3' size='md' mb={4} mt={5}>
									Categories
								</Heading>
								<Stack spacing={4}>
									<Checkbox
										isChecked={checkboxes.checkbox10}
										onChange={handleCheckboxChange}
										name='checkbox10'>
										Sample
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox11}
										onChange={handleCheckboxChange}
										name='checkbox11'>
										Sample
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox12}
										onChange={handleCheckboxChange}
										name='checkbox12'>
										Sample
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox13}
										onChange={handleCheckboxChange}
										name='checkbox13'>
										Sample
									</Checkbox>
									<Checkbox
										isChecked={checkboxes.checkbox14}
										onChange={handleCheckboxChange}
										name='checkbox14'>
										Sample
									</Checkbox>
								</Stack>
							</Box>
						</div>
					</Box>
				)}
				{/* Second Pane */}
				<Grid
					flex='3'
					justifyItems={'center'}
					marginTop={{ base: '15px', lg: 'none' }}
					marginLeft={{ base: '', lg: '-20%' }}>
					<Box
						height='60vh'
						display='grid'
						gridGap='10px'
						margin='10px'
						gridTemplateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
						width='40%'
						position='absolute'>
						{/* Grid content */}
						{/* Grid 1 */}
						<Box
							style={{
								backgroundColor: '#F2F2F2',
								borderRadius: '10px',
								boxShadow: 'md',
								color: 'black',
								width: '250px',
								height: '250px',
								position: 'relative',
								overflow: 'hidden',
								padding: '10px',
							}}>
							<Box
								width='180px'
								height='180px'
								backgroundColor='#E00027'
								position='absolute'
								top='-140px'
								right='-40px'
								borderRadius='45px'
								transform='rotate(-45deg)'></Box>
							<Box p={3}>
								<Icon
									as={FiLink}
									boxSize={6}
									marginTop='35px'
									position='absolute'
									zIndex='9999999999999999'
								/>
							</Box>
							{/* Content */}
							<Box
								p={6}
								marginTop='65px'
								position='absolute'
								zIndex='9999999999999999'>
								{/* Header */}
								<Heading as='h2' size='md' mb={2} fontSize='16px'>
									The ultimate guide to Workplace Chat
								</Heading>
								{/* Subtitle */}
								<Text color='#828282' fontSize='sm'>
									Sample Topic
								</Text>
								<Text
									backgroundColor='gray.300'
									marginTop='10px'
									width='48%'
									fontSize='sm'
									padding='3px'
									textAlign='center'
									borderRadius='35px'>
									Secure Base
								</Text>
							</Box>
						</Box>

						{/* Grid 2 */}
						<Box
							style={{
								backgroundColor: '#F2F2F2',
								borderRadius: '10px',
								boxShadow: 'md',
								color: 'black',
								width: '250px',
								height: '250px',
								position: 'relative',
								overflow: 'hidden',
								// marginLeft: '-40px',
							}}>
							<Box
								width='280px'
								height='180px'
								backgroundColor='#17E4A1'
								position='absolute'
								top='-100px'
								left='-30px'
								borderRadius='85px'
								transform='rotate(-25deg)'></Box>
							<Box p={4}>
								<Icon
									as={PiVideoDuotone}
									boxSize={6}
									marginTop='35px'
									position='absolute'
									zIndex='9999999999999999'
								/>
							</Box>
							{/* Content */}
							<Box
								p={6}
								marginTop='65px'
								position='absolute'
								zIndex='9999999999999999'>
								{/* Header */}
								<Heading as='h2' size='md' mb={2} fontSize='16px'>
									The ultimate guide to Workplace Chat
								</Heading>
								{/* Subtitle */}
								<Text color='#828282' fontSize='sm'>
									Sample Topic
								</Text>
								<Text
									backgroundColor='gray.300'
									marginTop='10px'
									width='48%'
									fontSize='sm'
									padding='3px'
									textAlign='center'
									borderRadius='35px'>
									Secure Base
								</Text>
							</Box>
						</Box>

						{/* Grid 3 */}
						<Box
							style={{
								backgroundColor: '#F2F2F2',
								borderRadius: '10px',
								boxShadow: 'md',
								color: 'black',
								width: '250px',
								height: '250px',
								position: 'relative',
								overflow: 'hidden',
								// marginLeft: '-80px',
							}}>
							<Box
								width='180px'
								height='180px'
								backgroundColor='#E00027'
								position='absolute'
								top='-140px'
								right='-40px'
								borderRadius='45px'
								transform='rotate(-45deg)'></Box>
							<Box p={4}>
								<Icon
									as={FiLink}
									boxSize={6}
									marginTop='35px'
									position='absolute'
									zIndex='9999999999999999'
								/>
							</Box>
							{/* Content */}
							<Box
								p={6}
								marginTop='65px'
								position='absolute'
								zIndex='9999999999999999'>
								{/* Header */}
								<Heading as='h2' size='md' mb={2} fontSize='16px'>
									The ultimate guide to Workplace Chat
								</Heading>
								{/* Subtitle */}
								<Text color='#828282' fontSize='sm'>
									Sample Topic
								</Text>
								<Text
									backgroundColor='gray.300'
									boxShadow='inset -20px 0px 20px rgba(0, 0, 0, 0.1)'
									marginTop='10px'
									width='48%'
									fontSize='sm'
									padding='3px'
									textAlign='center'
									borderRadius='35px'>
									Secure Base
								</Text>
							</Box>
						</Box>

						{/* Grid 4 */}
						<Box
							style={{
								backgroundColor: '#F2F2F2',
								borderRadius: '10px',
								boxShadow: 'md',
								color: 'black',
								width: '250px',
								height: '250px',
								position: 'relative',
								overflow: 'hidden',
							}}>
							<Box
								width='280px'
								height='180px'
								backgroundColor='#FF603E'
								position='absolute'
								top='-100px'
								left='-30px'
								borderRadius='85px'
								transform='rotate(-25deg)'></Box>
							<Box p={4}>
								<Icon
									as={PiVideoDuotone}
									boxSize={6}
									marginTop='35px'
									position='absolute'
									zIndex='9999999999999999'
								/>
							</Box>
							{/* Content */}
							<Box
								p={6}
								marginTop='65px'
								position='absolute'
								zIndex='9999999999999999'>
								{/* Header */}
								<Heading as='h2' size='md' mb={2} fontSize='16px'>
									The ultimate guide to Workplace Chat
								</Heading>
								{/* Subtitle */}
								<Text color='#828282' fontSize='sm'>
									Sample Topic
								</Text>
								<Text
									backgroundColor='gray.300'
									boxShadow='inset -20px 0px 20px rgba(0, 0, 0, 0.1)'
									marginTop='10px'
									width='48%'
									fontSize='sm'
									padding='3px'
									textAlign='center'
									borderRadius='35px'>
									Welbeing
								</Text>
							</Box>
						</Box>
						<Box
							style={{
								backgroundColor: '#F2F2F2',
								borderRadius: '10px',
								boxShadow: 'md',
								color: 'black',
								width: '250px',
								height: '250px',
								position: 'relative',
								overflow: 'hidden',
							}}>
							<Box
								width='300px'
								height='195px'
								backgroundColor='#FFE500'
								position='absolute'
								top='-100px'
								left='-30px'
								borderRadius='85px'
								transform='rotate(25deg)'></Box>
							<Box p={4}>
								<Icon
									as={PiFilePdf}
									boxSize={6}
									marginTop='35px'
									position='absolute'
									zIndex='9999999999999999'
								/>
							</Box>
							{/* Content */}
							<Box
								p={6}
								marginTop='65px'
								position='absolute'
								zIndex='9999999999999999'>
								{/* Header */}
								<Heading as='h2' size='md' mb={2} fontSize='16px'>
									The ultimate guide to Workplace Chat
								</Heading>
								{/* Subtitle */}
								<Text color='#828282' fontSize='sm'>
									Sample Topic
								</Text>
								<Text
									backgroundColor='gray.300'
									boxShadow='inset -20px 0px 20px rgba(0, 0, 0, 0.1)'
									marginTop='10px'
									width='48%'
									fontSize='sm'
									padding='3px'
									textAlign='center'
									borderRadius='35px'>
									Secure Base
								</Text>
							</Box>
						</Box>
						<Box
							style={{
								backgroundColor: '#F2F2F2',
								borderRadius: '10px',
								boxShadow: 'md',
								color: 'black',
								width: '250px',
								height: '250px',
								position: 'relative',
								overflow: 'hidden',
							}}>
							<Box
								width='250px'
								height='250px'
								backgroundColor='#56CCF2'
								position='absolute'
								top='-140px'
								right='-90px'
								borderRadius='115px'
								transform='rotate(-25deg)'></Box>
							<Box p={4}>
								<Icon
									as={PiFilePdf}
									boxSize={6}
									marginTop='35px'
									position='absolute'
									zIndex='9999999999999999'
								/>
							</Box>
							{/* Content */}
							<Box
								p={6}
								marginTop='65px'
								position='absolute'
								zIndex='9999999999999999'>
								{/* Header */}
								<Heading as='h2' size='md' mb={2} fontSize='16px'>
									Taking stock of mental health in your workplace
								</Heading>
								{/* Subtitle */}
								<Text color='#828282' fontSize='sm'>
									Sample Topic
								</Text>
								<Text
									backgroundColor='gray.300'
									boxShadow='inset -20px 0px 20px rgba(0, 0, 0, 0.1)'
									marginTop='10px'
									width='48%'
									fontSize='sm'
									padding='3px'
									textAlign='center'
									borderRadius='35px'>
									Secure Base
								</Text>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Box>
		</Grid>
	);
};

export default Body;
