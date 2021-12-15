export interface ChatItemProps {
  data: ChatItemDataType;
}
export interface ChatItemDataType {
  chatRoomId: string;
  name: string;
  avatarUrl: string;
  createdAt: string;
  content: string;
}
