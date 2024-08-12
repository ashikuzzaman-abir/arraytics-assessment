import { textColors } from '@/theme';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
	position: relative;
	display: inline-block;
	width: fit-content;
	cursor: pointer;
`;

const TooltipContent = styled.div<{ width: string }>`
	visibility: hidden;
	background-color: #fff;
	color: ${textColors.primary};
	text-align: center;
	border-radius: 4px;
	padding: 6px 4px;
	position: absolute;

	z-index: 100;
	bottom: 125%;
	left: 0;
	/* transform: translateX(-50%); */
	opacity: 0;
	transition: opacity 0.3s, visibility 0.3s;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
	min-width: ${(props) => props.width};
	/* min-width: inherit; */
	& img {
		width: 100%;
		padding-top: 8px;
	}
	&::after {
		content: '';
		position: absolute;
		top: 100%; /* Position at the bottom of the tooltip content */
		left: 10px;
		/* transform: translateX(-50%); */
		border-width: 5px;
		border-style: solid;
		border-color: #fff transparent transparent transparent;
	}

	${TooltipWrapper}:hover & {
		visibility: visible;
		opacity: 1;
	}
`;

const TooltipText = styled.span`
	cursor: pointer;
`;

type TooltipProps = {
	text: string;
	children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [tooltipWidth, setTooltipWidth] = useState('auto');

	const updateTooltipWidth = () => {
		if (wrapperRef.current) {
			const grandparent = wrapperRef.current.parentElement?.parentElement;
			if (grandparent) {
				const grandparentWidth = grandparent.offsetWidth;
				setTooltipWidth(`${grandparentWidth}px`);
			}
		}
	};

	useEffect(() => {
		updateTooltipWidth();
		window.addEventListener('resize', updateTooltipWidth);

		return () => {
			window.removeEventListener('resize', updateTooltipWidth);
		};
	}, []);

	return (
		<TooltipWrapper ref={wrapperRef}>
			{children}
			<TooltipContent width={tooltipWidth}>
				<TooltipText
					dangerouslySetInnerHTML={{
						__html: text,
					}}
				/>
			</TooltipContent>
		</TooltipWrapper>
	);
};

export default Tooltip;
