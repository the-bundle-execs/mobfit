# MobFit README

An initializer file has been created here: config/initializers/rolify.rb, you
can change rolify settings to match your needs.
Defaults values are commented out.

A Role class has been created in app/models (with the name you gave as
argument otherwise the default is role.rb), you can add your own business logic
inside.

Inside your User class (or the name you gave as argument otherwise the default
is user.rb), rolify method has been inserted to provide rolify methods.

hosted_events will be what loads to trainer dashboard
trainer_id : if is_trainer, user_id=trainer_id
if current_user == trainer id



1. QUESTION
Trainer
has_many :events
2. group approval
3. github -> master
