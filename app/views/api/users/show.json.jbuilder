json.partial! 'api/users/user', user: @user
# if @user.type == 'Business'
#   json.extract! @user, :id, :email, :type, :organization, :industry
#   @user.projects.each do |project|
#     json.set! project.id do
#       json.extract! project
# elsif @user.type == 'Agency'
#   json.extract @user, :id, :email, :type, :organization, :industry
#
#   json.set! :services do
#     @user.services
#   end
#   json.set! :verticals do
#     @user.verticals
#   end
# end
