class MessagesController < ApplicationController
  before_action :authenticate_user!
  include ApplicationHelper

  def index
    @messages = Message.order('created_at ASC')
  end

  def create
    @message = Message.new(message_params)


    respond_to do |format|
      if @message.save
        broadcast(@message.content)
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
