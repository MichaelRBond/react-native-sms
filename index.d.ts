
declare module "react-native-sms" {

  export enum AndroidSuccessTypes {
    all = "all",
    inbox = "inbox",
    sent = "sent",
    draft = "draft",
    outbox = "outbox",
    failed = "failed",
    queued = "queued",
  }

  export interface SendSmsOptions {
    body?: string;
    recipients?: string[];
    successTypes?: AndroidSuccessTypes[];
  }

  export function send(options: SendSmsOptions, callback: (completed: boolean, cancelled: boolean, error: boolean) => void): Promise<void>;

}
