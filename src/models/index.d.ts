import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMessage = {
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message, MessageMetaData>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

type EagerChatRoom = {
  readonly id: string;
  readonly newMesssages?: number | null;
  readonly LastMessage?: Message | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRoomUsers?: (ChatRoomUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly id: string;
  readonly newMesssages?: number | null;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly Messages: AsyncCollection<Message>;
  readonly ChatRoomUsers: AsyncCollection<ChatRoomUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom, ChatRoomMetaData>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly chatrooms?: (ChatRoomUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly chatrooms: AsyncCollection<ChatRoomUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerChatRoomUser = {
  readonly id: string;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatRoomUser = {
  readonly id: string;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatRoomUser = LazyLoading extends LazyLoadingDisabled ? EagerChatRoomUser : LazyChatRoomUser

export declare const ChatRoomUser: (new (init: ModelInit<ChatRoomUser, ChatRoomUserMetaData>) => ChatRoomUser) & {
  copyOf(source: ChatRoomUser, mutator: (draft: MutableModel<ChatRoomUser, ChatRoomUserMetaData>) => MutableModel<ChatRoomUser, ChatRoomUserMetaData> | void): ChatRoomUser;
}