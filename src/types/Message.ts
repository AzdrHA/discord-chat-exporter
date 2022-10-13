import { User } from './User';
import { Attachment } from './Attachment';
import { Embed } from './Embed';
import { ActionRows } from './ActionRows';

export interface Message {
  id: string;
  type: number;
  content: string;
  channel_id: string;
  author: User;
  attachments: Attachment[];
  embeds: Embed;
  // mentions: [[Object]];
  mention_roles: string[];
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  timestamp: Date;
  edited_timestamp: null | Date;
  flags: null;
  components: ActionRows[];
}
