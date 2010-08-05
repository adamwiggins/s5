require 'aws/s3'

AWS::S3::Base.establish_connection!(
	:access_key_id => ENV['AWS_ACCESS_KEY_ID'],
	:secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'])

class ImageBucket
	attr_reader :bucket

	def initialize(bucket)
		@bucket = bucket
	end

	def all
		AWS::S3::Bucket.objects(bucket).map { |b| b.key }
	end

	def pick_one_key
		all[rand(all.size)]
	end

	def pick_one_url
		"http://s3.amazonaws.com/#{bucket}/#{pick_one_key}"
	end
end
