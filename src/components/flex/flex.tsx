import { FlexProps } from "../../models/flex-props";

export const Flex = ({children, styles}: FlexProps) => <div style={{ display: 'flex', flexDirection: 'row', ...styles }}>{children}</div>