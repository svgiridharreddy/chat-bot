import { useForm } from 'react-hook-form';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '../ui/button';

export type ChatFormData = {
  prompt: string;
};

type Props = {
  onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

  const submit = handleSubmit((data) => {
    reset({ prompt: '' });
    onSubmit(data);
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <form
      onSubmit={submit}
      onKeyDown={onKeyDown}
      className="flex flex-col gap-2 items-end border-5 rounded-3xl p-4 mt-3"
    >
      <textarea
        {...register('prompt', {
          required: true,
          validate: (data) => data.trim().length > 0,
        })}
        autoFocus
        rows={3}
        placeholder="Ask anything"
        className="w-full border-0 focus:outline-0 resize-none"
      />

      {/* Send button */}

      <Button
        disabled={!formState.isValid}
        aria-label="Send message"
        className="rounded-full w-15 h-15 cursor-pointer"
      >
        <FaArrowUp className="text-white text-xl" />
      </Button>
    </form>
  );
};

export default ChatInput;
