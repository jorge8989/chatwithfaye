class MessagesController < ApplicationController

  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        format.html { redirect_to messages_path }
        format.js { render js: "", status: :created }
      else
        format.html { redirect_to messages_path }
        format.js { render js: "", status: :unprocessable_entity }
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
