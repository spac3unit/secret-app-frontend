import { TelegramLoginButton as TgLoginButton } from 'react-telegram-login';

export const TelegramLoginButton = () => {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };
  return (
    <TgLoginButton
      dataOnauth={handleTelegramResponse}
      botName="secretapplogin_bot"
      buttonSize="medium"
      lang="en"
      usePic="false"
    />
  );
};
