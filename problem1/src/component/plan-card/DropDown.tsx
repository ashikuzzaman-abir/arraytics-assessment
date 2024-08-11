import { borderColor } from '@/theme';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Tooltip from '../tooltip/Tooltip';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const DropdownContainer = styled.div`
	position: relative;
	width: 100%;
	@media screen and (max-width: 468px) {
		width: fit-content;
	}
`;

const DropdownHeader = styled.div<{ $color: string }>`
	background: white;
	border: 1px solid ${(props) => props.$color};
	padding: 6px 8px;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	font-size: 14px;
	letter-spacing: -1px;
	color: ${(props) => props.$color};
	user-select: none;
	flex: 1;
`;

const DropdownList = styled.ul<{ $color: string; isOpen: boolean }>`
	background: white;
	border: 1px solid ${borderColor};
	border-radius: 8px;
	position: absolute;
	width: 100%;
	top: 110%;
	left: 0;
	padding: 0;
	margin: 0;
	list-style: none;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	/* max-height: 150px; */
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	transition: display 0.3s;
	z-index: 1;
`;

const DropdownListItem = styled.li<{ $bgColor?: string; $color?: string }>`
	padding: 10px 20px;
	cursor: pointer;
	font-size: 14px;
	color: ${(props) => props.$color};
	border-bottom: 1px solid ${borderColor};
	user-select: none;
	letter-spacing: -1px;

	&:hover {
		background: ${(props) => props.$bgColor};
	}
`;

const DropdownIcon = styled.div<{ isOpen: boolean }>`
	/* width: 16px;
	height: 16px; */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-right: -8px;
	transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: transform 0.3s;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4px;
`;

type Option = {
	value: string;
	label: string;
};

type CustomDropdownProps = {
	options: Option[];
	selected: Option;
	onOptionSelect: (option: Option) => void;
	color: string;
	bgColor: string;
	tooltipContent: string;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
	options,
	selected,
	onOptionSelect,
	color,
	bgColor,
	tooltipContent,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option: Option) => {
		onOptionSelect(option);
		setIsOpen(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<DropdownContainer ref={dropdownRef}>
			<HeaderWrapper>
				<DropdownHeader $color={color} onClick={toggleDropdown}>
					<p dangerouslySetInnerHTML={{ __html: selected.label }}></p>
					<DropdownIcon isOpen={isOpen}>
						<RiArrowDropDownLine color={color} fontSize={'24px'} />
					</DropdownIcon>
				</DropdownHeader>
				<Tooltip text={tooltipContent}>
					<IoIosInformationCircleOutline fontSize={'20px'} color={color} />
				</Tooltip>
			</HeaderWrapper>
			<DropdownList $color={color} isOpen={isOpen}>
				{options.map((option) => (
					<DropdownListItem
						$bgColor={bgColor}
						$color={color}
						key={option.value}
						onClick={() => handleOptionClick(option)}
						dangerouslySetInnerHTML={{ __html: option.label }}
					></DropdownListItem>
				))}
			</DropdownList>
		</DropdownContainer>
	);
};

export default CustomDropdown;
